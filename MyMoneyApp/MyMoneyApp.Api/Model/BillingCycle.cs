using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MyMoneyApp.Api.Model
{
    public class BillingCycle
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string _id { get; set; }
        public string Name { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public List<Credit> Credits { get; set; }
        public List<Debt> Debts { get; set; }
    }
}