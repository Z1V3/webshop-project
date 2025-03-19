using System;
using System.Collections.Generic;

namespace WebshopAPI.Models;

public partial class PaymentDetail
{
    public int PaymentId { get; set; }

    public int UserPaymentId { get; set; }

    public int OrderId { get; set; }

    public DateTime PaymentDate { get; set; }

    public decimal Amount { get; set; }

    public string Currency { get; set; } = null!;

    public string PaymentStatus { get; set; } = null!;

    public string TransactionId { get; set; } = null!;

    public string AuthorizationCode { get; set; } = null!;

    public virtual OrderDetail Order { get; set; } = null!;

    public virtual UserPayment UserPayment { get; set; } = null!;
}
