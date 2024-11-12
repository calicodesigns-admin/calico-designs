import { createError } from "h3";
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

  // Insert the data directly into the 'lead_submissions' table
  const { data, error } = await supabase
    .from("lead_submissions")
    .insert([{ name, phone, project_details }])
    .select("id") // Select the id of the newly inserted row
    .single(); // Ensure we get the inserted row as a single object;

  // Handle errors during the insert
  if (error) {
    throw createError({
      statusCode: 400,
      message: `Error inserting details: ${error.message}`,
    });
  }

  // Return the inserted ID
  console.log(data.id);
  return { id: data.id };
});
