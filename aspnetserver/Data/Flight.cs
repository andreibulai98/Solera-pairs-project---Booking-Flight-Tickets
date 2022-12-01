using System.ComponentModel.DataAnnotations;

namespace aspnetserver.Data
{
    public sealed class Flight
    {
        [Key]
        public int FlightId { get; set; }

        [Required]
        [MaxLength(100)]
        public string AirLineName { get; set; } = String.Empty;

        [Required]
        [MaxLength(length:100)]
        public string Origin { get; set; } = String.Empty;

        [Required]
        [MaxLength(length: 100)]
        public string Destination { get; set; } = String.Empty;

        [Required]
        [MaxLength(length: 100)]
        public string Scales { get; set; } = String.Empty;

        [Required]
        [MaxLength(length: 100)]
        public string Luggage { get; set; } = String.Empty;

        [Required]
        [MaxLength(length: 100)]
        public string DepartureDay { get; set; } = String.Empty;

        [Required]
        [MaxLength(length: 100)]
        public string DepartureHour { get; set; } = String.Empty;

        [Required]
        [MaxLength(length: 100)]
        public string ArrivalDay { get; set; } = String.Empty;

        [Required]
        [MaxLength(length: 100)]
        public string ArrivalHour { get; set; } = String.Empty;
    }
}
