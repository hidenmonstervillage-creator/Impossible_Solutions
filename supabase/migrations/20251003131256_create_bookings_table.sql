/*
  # Create bookings table for Impossible Solutions

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `name` (text, required) - Client's full name
      - `email` (text, required) - Client's email address
      - `phone` (text, required) - Client's phone number
      - `service_type` (text, required) - Type of service needed
      - `message` (text, optional) - Additional details about the project
      - `created_at` (timestamptz) - Timestamp of booking request
      
  2. Security
    - Enable RLS on `bookings` table
    - Add policy for anyone to insert booking requests (public form submission)
    - Add policy for authenticated admins to read all bookings
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service_type text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit booking requests"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);