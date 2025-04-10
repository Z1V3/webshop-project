﻿using System;
using System.Collections.Generic;

namespace WebshopAPI.Models;

public partial class UserRole
{
    public int UserRoleId { get; set; }

    public string? Name { get; set; }

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
