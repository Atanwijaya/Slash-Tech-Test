using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Interfaces
{
    public interface IHttpClientService
    {
        Task<T> DoAuthorizedCallAsync<T>(T param, string URL, HttpMethod method);
        Task<T> DoNonAuthorizedCallAsync<T>(T param, string URL, HttpMethod method);
    }
}
