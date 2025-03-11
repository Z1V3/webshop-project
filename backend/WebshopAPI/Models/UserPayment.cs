using System;
using System.Collections.Generic;

namespace WebshopAPI.Models;

public partial class UserPayment
{
    public int UserPaymentId { get; set; }

    public int UserId { get; set; }

    public string? PaymentType { get; set; }

    public string? Provider { get; set; }

    public string? AccountNo { get; set; }

    public int? Expiry { get; set; }

    public string? CardholderName { get; set; }

    public bool? IsDefault { get; set; }
}
