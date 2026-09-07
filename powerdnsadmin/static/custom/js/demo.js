document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('demo-sidebar')
  const toggle = document.getElementById('sidebar-toggle')
  const search = document.getElementById('zone-search')
  const rows = Array.from(document.querySelectorAll('#zone-rows tr'))
  const refresh = document.getElementById('refresh-demo')
  const lastSync = document.getElementById('last-sync')

  toggle?.addEventListener('click', function () {
    sidebar?.classList.toggle('is-collapsed')
  })

  search?.addEventListener('input', function (event) {
    const query = event.target.value.toLowerCase().trim()
    rows.forEach(function (row) {
      row.hidden = query.length > 0 && !row.textContent.toLowerCase().includes(query)
    })
  })

  refresh?.addEventListener('click', function () {
    lastSync.textContent = 'Updated just now'
    refresh.textContent = 'Updated'
    window.setTimeout(function () {
      refresh.textContent = 'Refresh'
    }, 1400)
  })
})
