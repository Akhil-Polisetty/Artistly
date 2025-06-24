"use client";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import MultiSelectDropdown from "@/components/MultiSelectDropdown";

const categories = ["Singer", "Dancer", "DJ", "Speaker"];
const languages = ["Hindi", "English", "Telugu", "Tamil", "Kannada"];

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  bio: Yup.string().required("Bio is required"),
  category: Yup.array().min(1, "Select at least one category"),
  languages: Yup.array().min(1, "Select at least one language"),
  fee: Yup.string().required("Fee range is required"),
  location: Yup.string().required("Location is required"),
});

export default function AddArtistPage() {
  const [profileImage, setProfileImage] = useState(null);
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      bio: "",
      category: [],
      languages: [],
      fee: "",
      location: ""
    }
  });

  const onSubmit = (data) => {
    console.log({
      ...data,
      profileImage
    });
    alert("Form submitted! Check console for output.");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add Artist Details</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        <div>
          <label className="block font-medium mb-1">Name</label>
          <input {...register("name")} className="w-full border p-2 rounded" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Bio</label>
          <textarea {...register("bio")} className="w-full border p-2 rounded" />
          {errors.bio && <p className="text-red-500 text-sm">{errors.bio.message}</p>}
        </div>

        <div>
          <Controller
            control={control}
            name="category"
            render={({ field }) => (
              <MultiSelectDropdown
                label="Category"
                options={categories}
                selectedOptions={field.value}
                onChange={field.onChange}
              />
            )}
          />
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </div>

        <div>
          <Controller
            control={control}
            name="languages"
            render={({ field }) => (
              <MultiSelectDropdown
                label="Languages Spoken"
                options={languages}
                selectedOptions={field.value}
                onChange={field.onChange}
              />
            )}
          />
          {errors.languages && <p className="text-red-500 text-sm">{errors.languages.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Fee Range</label>
          <select {...register("fee")} className="w-full border p-2 rounded">
            <option value="">Select fee range</option>
            <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
            <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
            <option value="₹15,000 - ₹25,000">₹15,000 - ₹25,000</option>
          </select>
          {errors.fee && <p className="text-red-500 text-sm">{errors.fee.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Location</label>
          <input {...register("location")} className="w-full border p-2 rounded" />
          {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Profile Image (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProfileImage(e.target.files[0])}
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
