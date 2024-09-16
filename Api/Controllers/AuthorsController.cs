using DataAccess;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;



[ApiController]
[Route("api/[controller]")]
public class AuthorsController(MyDbContext context) : ControllerBase
{

    [HttpGet]
    [Route("GetAuthors")]
    public ActionResult GetAuthors()
    {
        return Ok(context.Authors.ToList());
    }

    [HttpPost]
    [Route("AddAuthor")]
    public ActionResult CreateAuthor(Author author)
    {
        return Ok(context.Authors.Add(author).Context.SaveChanges());
    }

    [HttpDelete("{id}")]
    [Route("DeleteAuthor/{id}")]
    public ActionResult DeleteAuthor(int id)
    {
        var author =  context.Authors.Find(id);
        if (author == null)
        {
            return NotFound();
        }

        context.Authors.Remove(author);
        context.SaveChangesAsync();

        return NoContent();
    }
    
}