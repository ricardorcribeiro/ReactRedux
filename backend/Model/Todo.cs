using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace backend.Model
{
    public class Todo
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string _id { get; set; }
        public string Description { get; set; }
        public bool Done { get; set; }
        public DateTime CreateAt { get; set; } = DateTime.Now;
    }
}