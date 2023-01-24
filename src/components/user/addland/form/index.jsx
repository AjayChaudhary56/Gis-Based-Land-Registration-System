
import { useForm } from "react-hook-form";
import 'semantic-ui-css/semantic.min.css'
import React from "react";
import "./style1.css"

const Reacthookform = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
 
  const onSubmit = (data) => {
   
    console.log(data);

    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Add Land</h1>
      <div className="field">
        <label>City</label>
        <br />
        <input
          type="text"
          name="city"
          placeholder="City"
          {...register("city",{ required: "City is required" })}
          
        />
        
        <p>{errors.city?.message}</p>
        </div>

        <div className="field">
        <label>Area (sq.ft)</label><br />
        <input
          type="number"
          name="area"
          placeholder="Area(sq.ft)"
          {...register("area",{ required: "Area is required" })}
        />
       
        <p>{errors.area?.message}</p>
      </div>
      <div className="field">
        <label>Land price (in Nrs)</label><br />
        <input

type="number"
          name="landPrice"
          placeholder="Land price"
          {...register("landPrice",{ required: "Land price is required" })}
        />
        <p>{errors.landPrice?.message}</p>
      </div>
      <div className="field">
        <label>Parcer Id</label><br />
        <input
          type="number"
          name="parcelId"
          placeholder="Parcel id"
          {...register("parcelId",{ required: "Parcel id is required" })}
        />
        <p>{errors.parcelId?.message}</p>
      </div>
      <div className="field">
        <label>Survey Number</label><br />
        <input
          type="text"
          name="surveyNumber"
          placeholder="Survey Number"
          {...register("surveyNumber",{ required: "Survey Number is required" })}
        />
        <p>{errors.surveyNumber?.message}</p>
      </div>
      <div className="field">
        <label>Upload Citizenship </label><br />
        <input
          type="file"
          name="document1"
          placeholder="Survey Number"
          {...register("document1",{ required: "Citizenship file is required" })}
        />
<input
          type="file"
          name="document2"
          placeholder="Survey Number"
          {...register("document2",{ required: "Land Document is required" })}
        />
         <input
          type="file"
          name="document3"
          placeholder="Survey Number"
          {...register("document3",{ required: "Land Document is required" })}
        />
        <p>{errors.document?.message}</p>
        </div>
      
      <button className="button123">Submit</button>
    </form>
  );
};

export default Reacthookform;
