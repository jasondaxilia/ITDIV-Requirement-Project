namespace IT_DIV.Models.Results
{
    public class ApiResponse<T>
    {
        public int StatusCode { get; set; }
        public string RequestMethod{ get; set; }
        public List<T> Payload { get; set; }
    }
}
