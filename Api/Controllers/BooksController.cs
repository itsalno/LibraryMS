using DataAccess;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;


[ApiController]
[Route("api/[controller]")]
public class BooksController(MyDbContext context) : ControllerBase
{
    [HttpGet]
    [Route("GetBooks")]
    public ActionResult GetBooks()
    {
        return Ok(context.Books.ToList());
    }

    [HttpPost]
    [Route("AddBook")]
    public ActionResult CreateBook(Book book)
    {
        return Ok(context.Books.Add(book).Context.SaveChanges());
    }
    
}