using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using MyMoneyApp.Api.Model;

namespace MyMoneyApp.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BillingCycleController : ControllerBase
    {
        private IMongoCollection<BillingCycle> _colletion;
        private readonly FilterDefinition<BillingCycle> Empty = Builders<BillingCycle>.Filter.Empty;
        public BillingCycleController()
        {
            var client = new MongoClient("mongodb://localhost:27017");
            _colletion = client.GetDatabase("databaseBillingCycle").GetCollection<BillingCycle>("BillingCycle");
        }

        [HttpGet]
        public ActionResult<IEnumerable<BillingCycle>> Get(int? skip, int? limit)
            => _colletion.Find<BillingCycle>(Empty).Skip(skip).Limit(limit).ToList();

        [HttpGet("{id}")]
        [ActionName("get")]
        public ActionResult<BillingCycle> GetById(string id)
            => _colletion.Find<BillingCycle>(x => x._id == id).Single();
        
        [HttpPost]
        public void Post(BillingCycle billingCycle)
            => _colletion.InsertOne(billingCycle);

        // [HttpPost("Editar")]
        // public void Editar(BillingCycle billingCycle)
        //     => _colletion.ReplaceOne(x => x._id == billingCycle._id, billingCycle);
        [HttpPut("{id}")]
        public void Put(string id, [FromBody]BillingCycle billingCycle)
            => _colletion.ReplaceOne(x => x._id == id, billingCycle);

        [HttpDelete("{id}")]
        public void Delete(string id)
            => _colletion.DeleteOne(x => x._id == id);

        [HttpGet("Count")]
        public long Count()
            => _colletion.CountDocuments(Empty);

        [HttpGet("Summary")]
        public object Summary()
        {
            var listBinlling  = _colletion.Find(Empty).ToList();
            return new { 
                        Cretits = listBinlling.Where(x=> x.Cretits?.Any() == true).SelectMany(x=> x.Cretits).Sum(c=> c.Value), 
                        Debts = listBinlling.Where(x=> x.Debts?.Any() == true).SelectMany(x=> x.Debts).Sum(d=> d.Value) 
                    };
        }
    }
}