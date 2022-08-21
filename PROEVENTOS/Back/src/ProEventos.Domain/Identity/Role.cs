using System.Collections.Generic;

namespace ProEventos.Domain
{
    public class Role
    {
        public IEnumerable<UserRole> UserRoles { get; set; }
    }
}