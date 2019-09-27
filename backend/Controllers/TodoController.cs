using System.Collections.Generic;
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
        public ActionResult<IEnumerable<Todo>> Get()
            => _colletion.Find<Todo>(Builders<Todo>.Filter.Empty).ToList();

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Todo> Get(string id)
            => _colletion.Find<Todo>(x=> x._id == ObjectId.Parse(id)).Single();

        // POST api/values
        [HttpPost]
        public void Post([FromBody] Todo todo)
            => _colletion.InsertOne(todo);

        // PUT api/values/5
        [HttpPut]
        public void Put(string id, [FromBody] Todo todo)
            => _colletion.ReplaceOne(x => x._id == ObjectId.Parse(id), todo);

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(ObjectId id)
            => _colletion.DeleteOne(x=> x._id == id);
    }
}