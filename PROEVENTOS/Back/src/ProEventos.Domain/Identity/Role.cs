using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace ProEventos.Domain
{
    public class Role : IdentityRole<int>
    {
        public IEnumerable<UserRole> UserRoles { get; set; }
    }
}