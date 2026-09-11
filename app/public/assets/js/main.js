const state = { mounted: false };

function mount() {
  if (state.mounted) return;
  state.mounted = true;
}

document.addEventListener('DOMContentLoaded', mount, { once: true });
