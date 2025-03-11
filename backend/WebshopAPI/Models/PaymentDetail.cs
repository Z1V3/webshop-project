using System;
using System.Collections.Generic;

namespace WebshopAPI.Models;

public partial class PaymentDetail
{
    public int PaymentDetailsId { get; set; }

    public int UserPaymentId { get; set; }

    public int OrderId { get; set; }

    public DateTime? PaymentDate { get; set; }

    public decimal? Amount { get; set; }

    public string? Currency { get; set; }

    public string? PaymentStatus { get; set; }

    public string? TransactionId { get; set; }

    public string? AuthorizationCode { get; set; }
}
