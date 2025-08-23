import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_SERVICE_ROLE_KEY
)

const groups = [
  { name: 'Accessories', position: 13 },
  { name: 'Shoe', position: 12 },
  { name: 'Bottom', position: 11 },
  { name: 'Top', position: 10 },
  { name: 'Hat', position: 9 },
  { name: 'Glasses', position: 8 },
  { name: 'Facial Hair', position: 7 },
  { name: 'Nose', position: 6 },
  { name: 'Eyebrows', position: 5 },
  { name: 'Eyes', position: 4 },
  { name: 'Face', position: 3 },
  { name: 'Hair', position: 2 },
  { name: 'Head', position: 1 }
]

async function seed() {
  const { data, error } = await supabase
    .from('customization_groups')
    .insert(groups)

  if (error) {
    console.error('❌ Error inserting groups:', error)
  } else {
    console.log('✅ Inserted groups:', data)
  }
}

seed()
