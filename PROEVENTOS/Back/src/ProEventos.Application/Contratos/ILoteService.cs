using System.Threading.Tasks;
using ProEventos.Application.Dtos;

namespace ProEventos.Application.Contratos
{
    public interface ILoteService
    {
        Task<LoteDto> SaveLote(int eventoId, LoteDto[] models);
        Task<bool> DeleteEvento(int eventoId, int loteId);

        Task<LoteDto[]> GetLoteByEventoIdAsync(int eventoId);
        Task<LoteDto> GetLoteByIdsAsync(int eventoId, );
    }
}