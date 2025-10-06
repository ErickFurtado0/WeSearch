
using Microsoft.AspNetCore.Mvc;
[ApiController]
[Route("api/[controller]")]
public class PacienteController : ControllerBase
{
    private readonly PacienteService _service;
    public PacienteController(PacienteService service)
    {
        _service = service;
    }

    [HttpGet]
    public IActionResult Get() => Ok(_service.GetAll());

    [HttpPost]
    public IActionResult Post([FromBody] Paciente paciente)
    {
        _service.Add(paciente);
        return Ok();
    }
}
