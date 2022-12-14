import Deneme from "./Deneme";
const Form = () => {
  const Obj = [
    {
      type: "typography",
      variant: "h2",
      align: "center",
      text: "Metarial UI Dynamic Forms With Json",
      color: "green",
    },
    {
      type: "typography",
      variant: "body",
      align: "center",
      text: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.",
      gutterBottom: true,
      display: "block",
      color: "blue",
    },

    {
      type: "standart",
      color: "error",
      size: "medium",
      style: {
        xs: "12",
        sm: "12",
        md: "",
        lg: "",
        mr: "10px",
      },

      variant: "outlined",
      label: "Ad",
      multiLine: false,
      inputType: "date",
      fullWidth: true,
      index: 2,
    },
    {
      color: "success",
      type: "standart",
      size: "small",
      style: {
        xs: "12",
        sm: "12",
        md: "",
        lg: "",
      },

      label: "Telefon",
      multiLine: false,
      inputType: "phone",
      index: 3,
      fullWidth: true,
    },
    {
      color: "secondary",
      type: "standart",
      style: {
        xs: "12",
        sm: "12",
        md: "",
        lg: "",
      },
      label: "Konu",
      multiLine: true,
      inputType: "password",
      index: 4,
      fullWidth: true,
    },
    {
      type: "standart",
      size: "small",
      style: {
        color: "info",
        xs: "12",
        sm: "6",
        md: "",
        lg: "",
      },
      label: "İl",
      multiLine: true,
      inputType: "password",
      index: 5,
      fullWidth: true,
    },
    {
      type: "standart",
      style: {
        xs: "12",
        sm: "6",
        md: "",
        lg: "",
      },
      label: "İlçe",
      multiLine: true,
      inputType: "password",
      index: 6,
      fullWidth: true,
    },
    {
      type: "standart",
      style: {
        xs: "12",
        sm: "12",
        md: "",
        lg: "",
      },
      label: "Mahalle",
      multiLine: true,
      inputType: "password",
      index: 7,
      fullWidth: true,
    },
    {
      type: "buton",
      style: {
        xs: "12",
        sm: "4",
        md: "",
        lg: "",
        color: "warning",
        size: "large",
      },
      text: "Submit",
      fullWidth: true,
      variant: "contained",
    },
    {
      type: "buton",
      text: "Refresh",
      style: {
        xs: "12",
        sm: "4",
        md: "",
        lg: "",
        color: "success",
        size: "large",
      },
      fullWidth: true,
      variant: "contained",
    },
    {
      type: "buton",
      text: "Delete",
      style: {
        xs: "12",
        sm: "4",
        md: "",
        lg: "",
        color: "error",
        size: "large",
      },
      fullWidth: true,
      variant: "contained",
    },
    {
      type: "checkbox",
      style: {
        xs: "12",
        sm: "3",
        md: "",
        lg: "",
        color: "primary",
        size: "large",
      },
      checked: true,
      label: "Female",
    },
    {
      type: "checkbox",
      style: {
        xs: "12",
        sm: "3",
        md: "",
        lg: "",
        color: "secondary",
        size: "large",
      },
      label: "Male",
    },
    {
      type: "checkbox",
      style: {
        xs: "12",
        sm: "3",
        md: "",
        lg: "",
        color: "info",
        size: "medium",
      },

      label: "Kadın",
    },
    {
      type: "checkbox",
      style: {
        xs: "12",
        sm: "3",
        md: "",
        lg: "",
        color: "success",
        size: "small",
      },
      value: "Erkek",

      checked: true,
    },
    {
      type: "radio",
      style: {
        xs: "12",
        sm: "3",
        md: "",
        lg: "",
        color: "warning",
        size: "medium",
      },
      value: "female",
      label: "Female",
      checked: true,
    },
    {
      type: "radio",
      style: {
        xs: "12",
        sm: "3",
        md: "",
        lg: "",
        color: "success",
        size: "small",
      },
      value: "male",
      label: "Male",
    },
    {
      type: "radio",
      style: {
        xs: "12",
        sm: "3",
        md: "",
        lg: "",
        color: "primary",
        size: "large",
      },
      value: "kadın",
      label: "Kadın",
      checked: true,
    },
    {
      type: "radio",
      style: {
        xs: "12",
        sm: "3",
        md: "",
        lg: "",
        color: "error",
        size: "large",
      },
      value: "erkek",
      label: "Erkek",
    },
    {
      type: "rating",
      style: {
        xs: "12",
        sm: "3",
        md: "",
        lg: "",
        color: "error",
        size: "large",
      },
      precision: "0.5",
      readOnly: false,
      max: 7,
    },
    {
      type: "rating",
      style: {
        xs: "12",
        sm: "3",
        md: "",
        lg: "",
        color: "error",
        size: "small",
      },
      precision: "0.5",
      readOnly: true,
      max: 4,
    },
    {
      type: "rating",
      style: {
        xs: "12",
        sm: "3",
        md: "",
        lg: "",
        color: "error",
        size: "medium",
      },
      precision: "0.5",
      readOnly: false,
      max: 2,
    },
    {
      type: "rating",
      style: {
        xs: "12",
        sm: "3",
        md: "",
        lg: "",
        color: "error",
        size: "large",
      },
      precision: "0.5",
      readOnly: false,
      max: 5,
      disabled: true,
    },
    {
      type: "select",
      label: "Ülke",
      fullWidth: true,
      variant: "standard",

      key: 10,
      reference: [
        {
          text: "Türkiye",
          value: 1,
        },
        {
          text: "Almanya",
          value: 2,
        },
        {
          text: "Hollanda",
          value: 3,
        },
        {
          text: "İngiltere",
          value: 4,
        },
      ],
      style: {
        xs: "12",
        sm: "4",
        md: "",
        lg: "",
        color: "error",
        size: "large",
      },
    },
    {
      type: "select",

      label: "Başkent",
      fullWidth: true,
      variant: "filled",
      key: 20,
      reference: [
        {
          text: "Ankara",
          value: 5,
        },
        {
          text: "Berlin",
          value: 6,
        },
        {
          text: "Amsterdam",
          value: 7,
        },
        {
          text: "Londra",
          value: 8,
        },
      ],
      style: {
        xs: "12",
        sm: "4",
        md: "",
        lg: "",
        color: "error",
        size: "large",
      },
    },
    {
      type: "select",
      fullWidth: true,
      variant: "outlined",
      label: "Ünlü Yemeği",
      key: 30,
      reference: [
        {
          text: "Kebap",
          value: 9,
        },
        {
          text: "Sauerbraten",
          value: 10,
        },
        {
          text: "Yardlong Bean",
          value: 11,
        },
        {
          text: "Sunday Roast",
          value: 12,
        },
      ],
      style: {
        xs: "12",
        sm: "4",
        md: "",
        lg: "",
        color: "error",
        size: "large",
      },
    },

    {
      type: "slider",
      style: {
        xs: "12",
        sm: "4",
        md: "",
        lg: "",
        color: "error",
        size: "large",
      },
      track: "normal",
      valueLabelDisplay: "on",
      orientation: "horizontal",
      min: 30,
      max: 100,
      step: 10,
      marks: true,
    },
    {
      type: "slider",
      style: {
        xs: "12",
        sm: "4",
        md: "",
        lg: "",
        color: "success",
        size: "small",
      },
      valueLabelDisplay: "on",
      orientation: "horizontal",
      min: 50,
      max: 80,
      step: 5,
    },
    {
      type: "slider",
      style: {
        xs: "12",
        sm: "4",
        md: "",
        lg: "",
        color: "info",
        size: "small",
      },
      valueLabelDisplay: "on",

      min: 20,
      max: 70,
    },
    {
      type: "switch",
      style: {
        xs: "12",
        sm: "3",
        md: "",
        lg: "",
        color: "success",
        size: "large",
      },
      edge: "end",
    },
    {
      type: "switch",
      style: {
        xs: "12",
        sm: "3",
        md: "",
        lg: "",
        color: "warning",
        size: "medium",
      },
      edge: "start",
      checked: true,
    },
    {
      type: "switch",
      style: {
        xs: "12",
        sm: "3",
        md: "",
        lg: "",
        color: "info",
        size: "small",
      },
      edge: "false",
      checked: true,
    },
    {
      type: "switch",
      style: {
        xs: "12",
        sm: "3",
        md: "",
        lg: "",
        color: "error",
        size: "large",
      },
      edge: "end",
    },
    {
      type: "autocomplete",
      text: "The Shawshank Redemption",

      label: "ABCDEFG",
      fullWidth: true,
      width: "300",
      ref: [
        {
          text: "The Shawshank Redemption",
          value: 1994,
          child: [{ text: "ceyhan", value: 122 }],
        },
        { text: "The Godfather", value: 1972 },
        { text: "The Godfather: Part II", value: 1974 },
        { text: "The Dark Knight", value: 2008 },
        { text: "12 Angry Men", value: 1957 },
        { text: "Schindler's List", value: 1993 },
        { text: "Pulp Fiction", value: 1994 },
      ],
      keys: ["text", "value"],
    },
    {
      type: "autocomplete",
      text: "The Shawshank Redemption",

      label: "Film",
      fullWidth: true,
      width: "300",
      disableListWrap: false,
      blurOnSelect: true,
      multiple: true,
      ref: [
        { text: "The Shawshank Redemption", value: 1994 },
        { text: "The Godfather", value: 1972 },
        { text: "The Godfather: Part II", value: 1974 },
        { text: "The Dark Knight", value: 2008 },
        { text: "12 Angry Men", value: 1957 },
        { text: "Schindler's List", value: 1993 },
        { text: "Pulp Fiction", value: 1994 },
      ],
      keys: ["text", "value"],
    },
    {
      type: "autocomplete",
      text: "The Shawshank Redemption",
      size: "small",
      label: "Film",
      fullWidth: true,

      width: "300",
      disableCloseOnSelect: false,
      ref: [
        { text: "The Shawshank Redemption", value: 1994 },
        { text: "The Godfather", value: 1972 },
        { text: "The Godfather: Part II", value: 1974 },
        { text: "The Dark Knight", value: 2008 },
        { text: "12 Angry Men", value: 1957 },
        { text: "Schindler's List", value: 1993 },
        { text: "Pulp Fiction", value: 1994 },
      ],
      keys: ["text", "value"],
    },
    {
      type: "autocomplete",
      text: "The Shawshank Redemption",

      label: "Days",
      fullWidth: true,
      width: "300",
      disableCloseOnSelect: false,
      disabledItemsFocusable: true,
      blurOnSelect: true,
      multiple: true,
      ref: [
        { text: "The Shawshank Redemption", value: 1994 },
        { text: "The Godfather", value: 1972 },
        { text: "The Godfather: Part II", value: 1974 },
        { text: "The Dark Knight", value: 2008 },
        { text: "12 Angry Men", value: 1957 },
        { text: "Schindler's List", value: 1993 },
        { text: "Pulp Fiction", value: 1994 },
      ],
      keys: ["text", "value"],
    },

    {
      type: "country",
      xs: "12",
      sm: "6",
      label: "Dr.Adı Soyadı",
      inputType: "password",
      name: "dradisoyadi",
    },

    {
      type: "country",
      label: "Ülke",
      fullWidth: true,
      variant: "standard",

      key: 100,
      ref: [{ text: "Germany", value: 201 }],
      reference: [
        { label: "Şehir" },
        {
          text: "Stuttgart",
          value: 106,
        },
        {
          text: "Heidelberg",
          value: 107,
        },
        {
          text: "Mannheim",
          value: 108,
        },
        {
          text: "Karlsruhe",
          value: 109,
        },
        {
          text: "Ulm",
          value: 110,
        },
      ],

      style: {
        xs: "12",
        sm: "4",
        md: "",
        lg: "",
        color: "error",
        size: "large",
      },
    },
    {
      type: "country",
      label: "Ülke",
      fullWidth: true,
      variant: "standard",

      key: 100,
      ref: [
        {
          text: "istanbul",
          value: 203,
          provinces: [{ text: "kadıköy", value: 12 }],
        },
      ],
      reference: [
        { label: "Şehir" },
        {
          text: "Amsterdam",
          value: 111,
        },
        {
          text: "Lahey",
          value: 112,
        },
        {
          text: "Rotterdam",
          value: 113,
        },
        {
          text: "Utrecht",
          value: 114,
        },
        {
          text: "Leiden",
          value: 115,
        },
      ],

      style: {
        xs: "12",
        sm: "4",
        md: "",
        lg: "",
        color: "error",
        size: "large",
      },
    },
  ];
  return (
    <>
      <Deneme Obj={Obj} />
    </>
  );
};

export default Form;
