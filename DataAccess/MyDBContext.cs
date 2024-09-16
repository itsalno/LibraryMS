namespace DataAccess;
using Microsoft.EntityFrameworkCore;

public class MyDbContext : DbContext
    
    {
        public MyDbContext(DbContextOptions<MyDbContext> options)
            : base(options)
        {
        
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>().HasKey(b => b.bookid);
            modelBuilder.Entity<Author>().HasKey(a => a.authorid);

        }
    
    
        public DbSet<Book> Books { get; set; }
        public DbSet<Author>Authors { get; set; }
    
    }

    public class Book
    {
        public int bookid { get; set; }
        public string bookname { get; set; }
        public int numberofpages { get; set; }
        public string description { get; set; }
    }

    public class Author
    {
        public int authorid { get; set; }
        public string authorname { get; set; }
        public int numberofbooks { get; set; }
        public string country { get; set; }
        
    }