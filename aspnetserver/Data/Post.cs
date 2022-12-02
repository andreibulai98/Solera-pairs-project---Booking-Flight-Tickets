using System.ComponentModel.DataAnnotations;

namespace aspnetserver.Data
{
    public sealed class Post
    {
        [Key]
        public int PostId { get; set; }

        [Required]
        [MaxLength(1000)]
        public string Title { get; set; } = String.Empty;

        [Required]
        [MaxLength(length:100)]
        public string Category { get; set; } = String.Empty;

        [Required]
        [MaxLength(length: 100000)]
        public string Body { get; set; } = String.Empty;

        [Required]
        [MaxLength(length: 10000)]
        public string Image { get; set; } = String.Empty;

    }
}
