create table customization_groups (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  position int,
  created_at timestamp default now()
);
create table customization_assets (
  id uuid primary key default uuid_generate_v4(),
  group_id uuid references customization_groups(id) on delete cascade,
  name text not null,
  thumbnail text, -- store image URL
  url text,       -- GLTF/GLB or texture file
  created_at timestamp default now()
);