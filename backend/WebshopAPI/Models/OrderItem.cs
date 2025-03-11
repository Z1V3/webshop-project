using System;
using System.Collections.Generic;

namespace WebshopAPI.Models;

public partial class OrderItem
{
    public int OrderItemsId { get; set; }

    public int OrderId { get; set; }

    public int ProductId { get; set; }

    public int? Quantity { get; set; }
}
