
public class PacienteRepository : IPacienteRepository
{
    private readonly List<Paciente> _pacientes = new();
    public IEnumerable<Paciente> GetAll() => _pacientes;
    public void Add(Paciente paciente)
    {
        paciente.Id = _pacientes.Count + 1;
        _pacientes.Add(paciente);
    }
}
