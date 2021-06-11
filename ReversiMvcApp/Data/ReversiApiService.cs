using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Json;
using ReversiMvcApp.Models;

namespace ReversiMvcApp.Data {
    public class ReversiApiService {
        private readonly HttpClient httpClient;
        
        public ReversiApiService() {
            httpClient = new HttpClient();
            httpClient.BaseAddress = new Uri("https://localhost:5001/");
        }
        
        public List<Spel> GetAllOpen() {
            List<Spel> objecten = new();
            // Ophalen uit API
            var resultaat = httpClient.GetAsync("/api/spel/").Result;
            if (resultaat.IsSuccessStatusCode) {
                objecten = resultaat.Content.ReadAsAsync<List<Spel>>().Result;
            }
            
            return objecten;
        }
        
        public List<Spel> GetAll(string spelerToken) {
            List<Spel> objecten = new();
            // Ophalen uit API
            var resultaat = httpClient.GetAsync($"/api/player/{spelerToken}").Result;
            if (resultaat.IsSuccessStatusCode) {
                objecten = resultaat.Content.ReadAsAsync<List<Spel>>().Result;
            }
            
            return objecten;
        }
        
        public Spel Get(string id) {
            Spel objecten = null;
            // Ophalen uit API
            var resultaat = httpClient.GetAsync($"/api/spel/{id}").Result;
            if (resultaat.IsSuccessStatusCode) {
                objecten = resultaat.Content.ReadAsAsync<Spel>().Result;
            }
            
            return objecten;
        }
        
        public bool Delete(string id, string spelerToken) {
            // Ophalen uit API
            var resultaat = httpClient.DeleteAsync($"/api/spel/{id}/?token={spelerToken}").Result;
            
            return resultaat.IsSuccessStatusCode;
        }
        
        public Spel NewSpel(string spelerToken, string omschrijving) {
            Spel objecten = null;
            var formContent = new FormUrlEncodedContent(new[]
            {
                new KeyValuePair<string, string>("spelerToken", spelerToken), 
                new KeyValuePair<string, string>("omschrijving", omschrijving) 
            });

            HttpResponseMessage result = httpClient.PostAsync("/api/spel/", formContent).Result;
            if (result.IsSuccessStatusCode) {
                objecten = result.Content.ReadAsAsync<Spel>().Result;
            }
            
            return objecten;
        }
        
        public Spel JoinSpel(string id, string spelerToken) {
            Spel objecten = null;

            HttpResponseMessage result = httpClient.PutAsync(
                $"/api/spel/{id}/join/?token={spelerToken}", new StringContent("")
            ).Result;
            if (result.IsSuccessStatusCode) {
                objecten = result.Content.ReadAsAsync<Spel>().Result;
            }
            
            return objecten;
        }
        
        public Spel DoeZet(string id, string spelerToken, int rij, int kolom) {
            Spel objecten = null;

            HttpResponseMessage result = httpClient.PutAsync(
                $"/api/spel/{id}/zet?token={spelerToken}&rij={rij}&kolom={kolom}", new StringContent("")
            ).Result;
            if (result.IsSuccessStatusCode) {
                objecten = result.Content.ReadAsAsync<Spel>().Result;
            }
            
            return objecten;
        }
    }
}