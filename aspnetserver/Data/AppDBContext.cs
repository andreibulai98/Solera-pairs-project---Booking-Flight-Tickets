using Microsoft.EntityFrameworkCore;

namespace aspnetserver.Data
{
    internal sealed class AppDBContext : DbContext
    {
        public DbSet<Post> Posts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder) => dbContextOptionsBuilder.UseSqlite("Data Source=./Data/AppDB.db");    
        
        protected override void OnModelCreating(ModelBuilder nodeBuilder)
        {
            Post[] postsToSeed = new Post[6];

            for(int i = 1; i <= 6; i++)
            {
                postsToSeed[i - 1] = new Post
                {
                    PostId = i,
                    Title = $"<Title {i}>",
                    Category = $"<Category of the post {i}>",
                    Body = $"<Body content {i}>",
                    Image = $"<Image link {i}>"
                };
            }

            nodeBuilder.Entity<Post>().HasData(postsToSeed);
        }
    }
}
