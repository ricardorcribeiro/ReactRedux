using System.Collections.Generic;
using System.Linq;
using backend.Model;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private IMongoCollection<Todo> _colletion;
        public TodoController()
        {
            var client = new MongoClient("mongodb://localhost:27017");

            _colletion = client.GetDatabase("databasetodo").GetCollection<Todo>("todo");
        }
        [HttpGet]
        public ActionResult<IEnumerable<Todo>> Get(string description = "")
        {
            var todos = _colletion.Find<Todo>(Builders<Todo>.Filter.Empty).ToList();
            if(!string.IsNullOrWhiteSpace(description))
                todos = todos.Where(x=> x.Description.Contains(description)).ToList();
            return todos;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        [ActionName("get")]
        public ActionResult<Todo> GetById(string id)
            => _colletion.Find<Todo>(x => x._id == id).Single();

        // POST api/values
        [HttpPost]
        public void Post([FromBody] Todo todo)
            => _colletion.InsertOne(todo);

        // PUT api/values/5

        [HttpPost("Editar")]
        public void Editar([FromBody] Todo todo)
            => _colletion.ReplaceOne(x => x._id == todo._id, todo);

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(string id)
            => _colletion.DeleteOne(x => x._id == id);
    }
}