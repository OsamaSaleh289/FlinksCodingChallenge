using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace backend.Controllers
{
    [ApiController]
    public class CompanyNameController: ControllerBase {
        [Route("/api/getName/{link}")]
        [HttpGet("{link}")]
        public string getName(string link){
            if(link == ""){
                Console.WriteLine(link);
                return "Flinks (Default)";


            }
            return link.Split(".")[0];


        }





    }




}