import mongoose,{Schema, Model, Document} from 'mongoose';

//interface for Airport document
export interface IAirport extends Document {
  icao: string;
  name: string;
  city: string;
  country: string;
  timezone: string;
  location: {
    lat: number;
    lon: number;
  };
}

// Schema for Airport
const airportSchema: Schema<IAirport> = new Schema({
    icao:{
        type: String,
        required: true,
        unique: true,
        uppercase: true,
        trim: true,
    },
    name:{
        type: String,
        required: true,
        trim: true,
    },
    city:{
        type: String,
        required: true,
    },
    country:{
        type: String,
        required: true,

    },
    timezone:{
        type:String,
        required:true,
    },
    location:{
        lat:{type:Number,required:true},
        lon:{type:Number,required:true},
    }

},
{timestamps: true}
);

//create and export the Airport model

const Airport : Model<IAirport> = mongoose.model<IAirport>('Airport',airportSchema);

export default Airport;