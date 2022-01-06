from aiohttp import web

async def root_handler(request):
    return web.HTTPFound('/index.html')

app = web.Application()
app.add_routes([
    web.get('/', root_handler),
    web.static('/', '../dist')
])

if __name__ == '__main__':
    web.run_app(app, port=8888)
