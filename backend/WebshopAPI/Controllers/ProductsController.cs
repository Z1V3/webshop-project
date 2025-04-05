using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebshopAPI.Models;

namespace WebshopAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly WebShopDBContext _context;

        public ProductsController(WebShopDBContext context)
        {
            _context = context;
        }

        // GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts(
            string? price = null,
            string? type = null,
            string? sortBy = null,
            string? order = "asc")
        {
            IQueryable<Product> products = _context.Products;


            // Filter by category
            if (!string.IsNullOrEmpty(type))
            {
                switch (type)
                {
                    case "paintings":
                        type = "1";
                        break;
                    case "decorations":
                        type = "2";
                        break;
                    case "wearables":
                        type = "3";
                        break;
                }
                products = products.Where(p => p.ProductTypeId == Int32.Parse(type));
            }

            // Additional filters
            if (!string.IsNullOrEmpty(price))
            {
                products = products.Where(p => p.Price <= Int32.Parse(price));
            }

            // Sorting
            if (!string.IsNullOrEmpty(sortBy))
            {
                sortBy = sortBy.ToLower();
                products = sortBy switch
                {
                    "name" => order?.ToLower() == "desc" ? products.OrderByDescending(p => p.Name) : products.OrderBy(p => p.Name),
                    "price" => order?.ToLower() == "desc" ? products.OrderByDescending(p => p.Price) : products.OrderBy(p => p.Price),
                    "type" => order?.ToLower() == "desc" ? products.OrderByDescending(p => p.ProductTypeId) : products.OrderBy(p => p.ProductTypeId),
                    _ => products
                };
            }

            return await products.ToListAsync();
        }



        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        // GET: api/Products/Random/3
        [HttpGet("Random/{num}")]
        public async Task<ActionResult<IEnumerable<Product>>> GetRandomEfficient(int num)
        {
            var products = await _context.Products
                .FromSqlRaw("SELECT TOP ({0}) * FROM Product ORDER BY NEWID()", num)
                .ToListAsync();
            return products;
        }

        // GET: api/Products/Paintings
        [HttpGet("Paintings")]
        public async Task<ActionResult<IEnumerable<Product>>> GetPaintings()
        {
            return await _context.Products
                .Where(p => p.ProductTypeId == 1)
                .ToListAsync();
        }

        // GET: api/Products/Decorations
        [HttpGet("Decorations")]
        public async Task<ActionResult<IEnumerable<Product>>> GetDecorations()
        {
            return await _context.Products
                .Where(p => p.ProductTypeId == 2)
                .ToListAsync();
        }

        // GET: api/Products/Wearables
        [HttpGet("Wearables")]
        public async Task<ActionResult<IEnumerable<Product>>> GetWearables()
        {
            return await _context.Products
                .Where(p => p.ProductTypeId == 3)
                .ToListAsync();
        }

        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, Product product)
        {
            if (id != product.ProductId)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProduct", new { id = product.ProductId }, product);
        }

        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductExists(int id)
        {
            return _context.Products.Any(e => e.ProductId == id);
        }
    }
}
