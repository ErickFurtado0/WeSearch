
public class PacienteService
{
    private readonly IPacienteRepository _repository;
    public PacienteService(IPacienteRepository repository)
    {
        _repository = repository;
    }

    public IEnumerable<Paciente> GetAll() => _repository.GetAll();

    public void Add(Paciente paciente) => _repository.Add(paciente);
}
