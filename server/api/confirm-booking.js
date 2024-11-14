import { createError, getCookie } from "h3";
import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  // Create a Supabase client
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SERVICE_KEY
  );

  // Get the ID from the cookie
  const id = getCookie(event, "submission_id");

  // If the ID cookie is missing, throw an error
  if (!id) {
    throw createError({
      statusCode: 400,
      message: "No submission ID found in cookies.",
    });
  }

  // Update the item's isBookingConfirmed value to true
  const { data, error } = await supabase
    .from("lead_submissions")
    .update({ isBookingConfirmed: true })
    .eq("id", id)
    .single(); // Ensure we get only one row back

  // Handle errors during the update
  if (error) {
    throw createError({
      statusCode: 500,
      message: `CHECK::Error updating booking confirmation: ${error.message}`,
    });
  }

  // Return a success message
  return { success: true, message: "Booking confirmed successfully." };
});
