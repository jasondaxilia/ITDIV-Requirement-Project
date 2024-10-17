namespace IT_DIV.Models.Results
{
    public class GetUserResult
    {
        public Guid UserID{ get; set; }
        public string UserName { get; set; } 
        public string UserEmail { get; set; }
        public string UserPassword { get; set; }
    }
}