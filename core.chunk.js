/*
 * Stremio Theater - Core chunk replacement
 * Loads v5 stremio-core-web (0.53.0) WASM backend via external Worker
 * Replaces the original inline worker with v5's worker.js + WASM binary
 */
(self.webpackChunkstremio_theater = self.webpackChunkstremio_theater || []).push([
    [9114], {
        2507: A => {
            "use strict";
            A.exports = function(A, k, e, b) {
                var r = self || window;
                try {
                    try {
                        var a;
                        try {
                            a = new r.Blob([A]);
                        } catch (k) {
                            (a = new(r.BlobBuilder || r.WebKitBlobBuilder || r.MozBlobBuilder || r.MSBlobBuilder)).append(A), a = a.getBlob();
                        }
                        var f = r.URL || r.webkitURL,
                            i = f.createObjectURL(a),
                            B = new r[k](i, e);
                        return f.revokeObjectURL(i), B;
                    } catch (b) {
                        return new r[k]("data:application/javascript,".concat(encodeURIComponent(A)), e);
                    }
                } catch (A) {
                    if (!b) throw Error("Inline worker is not supported");
                    return new r[b](A);
                }
            };
        },
        1538: (A, k, e) => {
            A.exports = function() {
                // Load v5 WASM core worker from external file instead of inline code
                try {
                    var w = new Worker('v5-worker.js');
                    w.onerror = function(ev) {
                        console.error('[core] Worker error:', ev.message || ev);
                    };
                    return w;
                } catch(err) {
                    console.error('[core] Failed to create Worker:', err);
                    throw err;
                }
            };
        }
    }
]);
