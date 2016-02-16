// node com a validação
var uLang = require('uLang');

var password = function(password) {
  var response = {};

  if (!password) {
    response = {
      "error": uLang("password_required")
    };
  } else if (password.length != 4) {
    response = {
      "error": uLang("password_length_invalid")
    };
  } else {
    response = true;
  }

  return response;
};

// Laravel Validation Strings to be remembered
/**
    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | such as the size rules. Feel free to tweak each of these messages.
    |

    "accepted"                  => ":attribute deve ser aceito.",
    "active_url"                => ":attribute não contém um URL válido.",
    "after"                     => ":attribute deverá conter uma data posterior a :date.",
    "alpha"                     => ":attribute deverá conter apenas letras.",
    "alpha_dash"                => ":attribute deverá conter apenas letras, números e traços.",
    "alpha_num"                 => ":attribute deverá conter apenas letras e números .",
    "array"                     => ":attribute precisa ser um conjunto.",
    "before"                    => ":attribute deverá conter uma data anterior a :date.",
    "between"                   => [
        "numeric" => ":attribute deverá ter um valor entre :min e :max.",
        "file"    => ":attribute deverá ter um tamanho entre :min e :max kilobytes.",
        "string"  => ":attribute deverá conter entre :min e :max caracteres.",
        "array"   => ":attribute precisar ter entre :min e :max itens.",
    ],
    "boolean"                   => ":attribute deverá ter o valor verdadeiro ou falso.",
    "confirmed"                 => "A confirmação para :attribute não coincide.",
    "date"                      => ":attribute não contém uma data válida.",
    "date_format"               => "A data indicada em :attribute não respeita o formato :format.",
    "different"                 => ":attribute e :other deverão conter valores diferentes.",
    "digits"                    => ":attribute deverá conter :digits dígitos.",
    "digits_between"            => ":attribute deverá conter entre :min a :max dígitos.",
    "email"                     => ":attribute não contém um endereço de email válido.",
    "exists"                    => "O valor selecionado para :attribute é inválido.",
    "filled"                    => "É obrigatória a indicação de um valor para :attribute.",
    "image"                     => ":attribute deverá conter uma imagem.",
    "in"                        => ":attribute não contém um valor válido.",
    "integer"                   => ":attribute deverá conter um número inteiro.",
    "ip"                        => ":attribute deverá conter um IP válido.",
    "max"                       => [
        "numeric" => ":attribute não deverá conter um valor superior a :max.",
        "file"    => ":attribute não deverá ter um tamanho superior a :max kilobytes.",
        "string"  => ":attribute não deverá conter mais de :max caracteres.",
        "array"   => ":attribute deve ter no máximo :max itens.",
    ],
    "mimes"                     => ":attribute deverá conter um arquivo do tipo: :values.",
    "min"                       => [
        "numeric" => ":attribute deverá ter um valor superior ou igual a :min.",
        "file"    => ":attribute deverá ter no mínimo :min kilobytes.",
        "string"  => ":attribute deverá conter no mínimo :min caracteres.",
        "array"   => ":attribute deve ter no mínimo :min itens.",
    ],
    "not_in"                    => ":attribute contém um valor inválido.",
    "numeric"                   => ":attribute deverá conter um valor numérico.",
    "regex"                     => "O formato do valor para :attribute é inválido.",
    "required"                  => "É obrigatória a indicação de um valor para :attribute.",
    "required_if"               => "É obrigatória a indicação de um valor para :attribute quando :other é igual a :value.",
    "required_with"             => "É obrigatória a indicação de um valor para :attribute quando :values está presente.",
    "required_with_all"         => "É obrigatória a indicação de um valor para :attribute quando um dos :values está presente.",
    "required_without"          => "É obrigatória a indicação de um valor para :attribute quanto :values não está presente.",
    "required_without_all"      => "É obrigatória a indicação de um valor para :attribute quando nenhum dos :values está presente.",
    "same"                      => "Os campos :attribute e :other deverão conter valores iguais.",
    "size"                      => [
        "numeric" => ":attribute deverá conter o valor :size.",
        "file"    => ":attribute deverá ter o tamanho de :size kilobytes.",
        "string"  => ":attribute deverá conter :size caracteres.",
        "array"   => ":attribute deve ter :size itens.",
    ],
    "string"                    => ":attribute deve ser uma string.",
    "timezone"                  => ":attribute deverá ter um fuso horário válido.",
    "unique"                    => "O valor indicado para :attribute já está sendo utilizado.",
    "url"                       => "O formato da URL indicado em :attribute é inválido.",
 */
