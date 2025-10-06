
public interface IPacienteRepository
{
    IEnumerable<Paciente> GetAll();
    void Add(Paciente paciente);
}
