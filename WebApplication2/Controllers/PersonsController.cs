using Microsoft.AspNetCore.Mvc;

namespace WebApplication2.Controllers;

[ApiController]
[Route("[controller]")]
public class PersonsController : ControllerBase
{
    [HttpGet]
    public async Task<IEnumerable<Person>> Get()
    {
        var client = new HttpClient();
        var response = await 
            client.GetAsync(
                "https://developinterviewstorage.blob.core.windows.net/developinterviewcont/Employees.json");

        if (!response.IsSuccessStatusCode)
        {
            return new List<Person>();
        }

        var persons = await response.Content.ReadFromJsonAsync<List<Person>>();

        return persons ?? new List<Person>();
    }
}