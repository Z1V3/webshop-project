using System;
using System.Collections.Generic;

namespace WebshopAPI.Models;

public partial class Product
{
    public int ProductId { get; set; }

    public string Name { get; set; } = null!;

    public string Description { get; set; } = null!;

    public string? Sku { get; set; }

    public int Stock { get; set; }

    public int ProductTypeId { get; set; }

    public decimal Price { get; set; }

    public int? Discount { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime? ModifiedAt { get; set; }

    public string? ImagePath { get; set; }

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();

    public virtual ProductType ProductType { get; set; } = null!;
}
