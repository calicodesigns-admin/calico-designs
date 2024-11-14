import { createError, setCookie } from "h3";
import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  // Get the data from the request body
  const { name, phone, project_details } = await readBody(event);
  console.log("DETAILS:", name);

  // Create a Supabase client
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SERVICE_KEY
  );

  // Insert the data into the 'lead_submissions' table
  const { data, error } = await supabase
    .from("lead_submissions")
    .insert([{ name, phone, project_details }])
    .select("id")
    .single();

  // Handle errors during the insert
  if (error) {
    throw createError({
      statusCode: 400,
      message: `Error inserting details: ${error.message}`,
    });
  }

  // Set a cookie with the inserted ID
  setCookie(event, "submission_id", data.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // Cookie expires in 1 day
    path: "/", // Available across the entire site
  });

  // Return the inserted ID
  console.log(data.id);
  return { id: data.id };
});
