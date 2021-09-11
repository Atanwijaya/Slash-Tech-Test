using IdentityModel.Client;
using IdentityServer4.Models;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WebApplication1.Interfaces;
using WebApplication1.Models;

namespace WebApplication1.Services
{
    public class HttpClientService : IHttpClientService
    {
        private readonly IHttpClientFactory clientFactory;
        private readonly IHttpContextAccessor httpContextAccessor;
        public HttpClientService(IHttpClientFactory clientFactory, IHttpContextAccessor httpContextAccessor)
        {
            this.clientFactory = clientFactory;
            this.httpContextAccessor = httpContextAccessor;
        }

        public async Task<T> DoAuthorizedCallAsync<T>(T param, string URL, HttpMethod method)
        {
            var httpClient = clientFactory.CreateClient();
            var claim = httpContextAccessor.HttpContext.User;
            string token = "";
            T response;
            using (httpClient)
            {
                if (claim.HasClaim(x => x.Type == Constant.IdentityServer.AccessToken))
                {
                    token = (claim.FindFirst(x => x.Type == Constant.IdentityServer.AccessToken)).Value;
                }
                else
                {
                    token = await GetAccessTokenAsync(httpClient);
                }
                var request = new HttpRequestMessage(method, URL)
                {
                    Content = new StringContent(JsonConvert.SerializeObject(param), Encoding.UTF8, "application/json")
                };
                httpClient.SetBearerToken(token);
                var req = await httpClient.SendAsync(request);
                string contentResult = "";
                if (req.StatusCode == System.Net.HttpStatusCode.Unauthorized)
                {
                    var newToken = await GetAccessTokenAsync(httpClient);
                    httpClient.SetBearerToken(newToken);
                    var secondReq = await httpClient.SendAsync(request);
                    secondReq.EnsureSuccessStatusCode();
                    contentResult = await secondReq.Content.ReadAsStringAsync();
                    ClaimsIdentity claimsIdentity = new ClaimsIdentity();
                    claimsIdentity.AddClaim(new Claim(Constant.IdentityServer.AccessToken, newToken));
                    claim.AddIdentity(claimsIdentity);
                }
                else
                {
                    req.EnsureSuccessStatusCode();
                    contentResult = await req.Content.ReadAsStringAsync();
                }
                response = JsonConvert.DeserializeObject<T>(contentResult);
            }
            return response;
        }
        public async Task<T> DoNonAuthorizedCallAsync<T>(T param, string URL, HttpMethod method)
        {
            var httpClient = clientFactory.CreateClient();
            T response;
            using (httpClient)
            {
                StringContent content;
                var request = new HttpRequestMessage(method, URL);
                if (param != null)
                {
                    content = new StringContent(JsonConvert.SerializeObject(param), Encoding.UTF8, "application/json");
                    request.Content = content;
                }

                var req = await httpClient.SendAsync(request);
                req.EnsureSuccessStatusCode();
                var contentResult = await req.Content.ReadAsStringAsync();
                if (!string.IsNullOrEmpty(contentResult))
                {
                    response = JsonConvert.DeserializeObject<T>(contentResult);
                }
                else
                    return default(T);
            }
            return response;
        }
        private async Task<string> GetAccessTokenAsync(HttpClient httpClient)
        {
            var tokenResponse = await httpClient.RequestClientCredentialsTokenAsync(new ClientCredentialsTokenRequest
            {
                Address = "http://localhost:1142/connect/token",
                ClientId = Constant.IdentityServer.ClientID,
                ClientSecret = "97a4343c-c199-4744-8aab-17cef8a919f6",
                Scope = Constant.IdentityServer.IdentityAPI
            });
            if (tokenResponse.IsError)
            {
                throw new HttpRequestException("Error on authorization :" + tokenResponse.HttpErrorReason + " Code:" + tokenResponse.HttpStatusCode);
            }
            return tokenResponse.AccessToken;
        }
    }
}
