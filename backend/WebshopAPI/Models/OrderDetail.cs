using System;
using System.Collections.Generic;

namespace WebshopAPI.Models;

public partial class OrderDetail
{
    public int OrderId { get; set; }

    public int UserId { get; set; }

    public int PaymentId { get; set; }

    public decimal? Total { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? ModifiedAt { get; set; }
}
