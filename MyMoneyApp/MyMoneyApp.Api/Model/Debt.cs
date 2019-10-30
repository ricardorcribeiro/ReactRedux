using MyMoneyApp.Api.Enum;

namespace MyMoneyApp.Api.Model
{
    public class Debt
    {
        public string Name { get; set; }
        public decimal Value { get; set; }
        public Status Status { get; set; }
    }
}

