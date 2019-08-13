from mitmproxy import http

def request(flow: http.HTTPFlow) -> None:
    if (flow.request.pretty_host == "yatsun.me"):
        flow.response = http.HTTPResponse.make(
            200,
            '<html><head></head><body><h1>Test</h1></body></html>',
            {"Content-Type": "text/html"}
        )
