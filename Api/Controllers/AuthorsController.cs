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

    
    
}