using IT_DIV.Data;
using IT_DIV.Models;
using IT_DIV.Models.Requests;
using IT_DIV.Models.Results;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IT_DIV.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {

        private readonly AppDbContext _context;

        public CategoryController(AppDbContext context)
        {
            _context = context;
        }

        //GET api/<UserController>/5
        [HttpGet()]
        public async Task<ActionResult<GetCategoryResult>> Get(Guid id)
        {
            var user = await _context.Category
                      .Select(x => new GetCategoryResult()
                      {
                          UserID = x.UserID,
                          CategoryName = x.CategoryName,
                          CategoryID = x.CategoryID,
                      })
                      .Where(x => x.UserID == id)
                      .ToListAsync();

            var response = new ApiResponse<GetCategoryResult>
            {
                Payload = user
            };
            return Ok(response);
        }

        // POST api/<CategoryController>
        [HttpPost("Add Category{UserID}")]
        public async Task<IActionResult> AddCategory(Guid UserID, [FromBody] CreateCategoryRequest createCategoryRequest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var CheckCategory = _context.User.Where(x => x.UserID == UserID).Count();
            if(CheckCategory == 0)
            {
                return NotFound("Category Not Found");
            }
            var Category = new Category
            {
                UserID = UserID,
                CategoryName = createCategoryRequest.CategoryName
            };
            _context.Category.Add(Category);
            await _context.SaveChangesAsync();
            return Ok("Category Successfully Added");
        }

        // PUT api/<CategoryController>/5
        [HttpPut("Edit{id}")]
        public async Task<IActionResult> EditCategory(int id, [FromBody] UpdateCategoryRequest updateCategoryRequest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var CheckCat = await _context.Category.FirstOrDefaultAsync(x => x.CategoryID == id);
            if(CheckCat == null)
            {
                return NotFound("Category Not Found");
            }
            CheckCat.CategoryName = updateCategoryRequest.CategoryName;
            await _context.SaveChangesAsync();
            return Ok("Category Successfully Editted");
        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("Delete{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            var CheckCat = await _context.Category.FirstOrDefaultAsync(x => x.CategoryID == id);
            if (CheckCat == null)
            {
                return NotFound("Category Not Found");
            }
            _context.Category.Remove(CheckCat);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}