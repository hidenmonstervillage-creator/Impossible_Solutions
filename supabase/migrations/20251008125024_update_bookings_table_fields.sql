/*
  # Update bookings table with new fields

  1. Changes
    - Drop old columns: `service_type`, `message`
    - Add new columns:
      - `business_name` (text, required) - Name of the client's business
      - `website` (text, optional) - Client's website URL
      - `business_description` (text, required) - 1-2 sentence description of what they sell/offer and to whom
      
  2. Notes
    - Existing data will be preserved for `name`, `email`, `phone` columns
    - New fields better capture business consultation requirements
*/

DO $$
BEGIN
  -- Drop old columns if they exist
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'service_type'
  ) THEN
    ALTER TABLE bookings DROP COLUMN service_type;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'message'
  ) THEN
    ALTER TABLE bookings DROP COLUMN message;
  END IF;

  -- Add new columns if they don't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'business_name'
  ) THEN
    ALTER TABLE bookings ADD COLUMN business_name text NOT NULL DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'website'
  ) THEN
    ALTER TABLE bookings ADD COLUMN website text DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'business_description'
  ) THEN
    ALTER TABLE bookings ADD COLUMN business_description text NOT NULL DEFAULT '';
  END IF;
END $$;
