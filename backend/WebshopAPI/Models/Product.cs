using System;
using System.Collections.Generic;

namespace WebshopAPI.Models;

public partial class Product
{
    public int ProductId { get; set; }

    public string? Name { get; set; }

    public string? Description { get; set; }

    public string? Sku { get; set; }

    public int? Stock { get; set; }

    public int? ProductTypeId { get; set; }

    public decimal? Price { get; set; }

    public int? Discount { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? ModifiedAt { get; set; }

    public virtual ProductType? ProductType { get; set; }
}
